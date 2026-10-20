import { useState, useEffect, useRef, useCallback } from 'react';

// Cấu trúc hợp âm hoàng hôn lãng mạn (Tần số Hz)
// Vòng hòa âm: Cmaj9 -> Am9 -> Fmaj7 -> G6
interface ChordDef {
  bass: number;
  notes: number[];
}

const SUNSET_CHORDS: ChordDef[] = [
  {
    bass: 130.81, // C3
    notes: [261.63, 329.63, 392.00, 493.88, 587.33], // C4, E4, G4, B4, D5 (Cmaj9)
  },
  {
    bass: 110.00, // A2
    notes: [220.00, 261.63, 329.63, 392.00, 493.88], // A3, C4, E4, G4, B4 (Am9)
  },
  {
    bass: 87.31,  // F2
    notes: [174.61, 220.00, 261.63, 329.63, 392.00], // F3, A3, C4, E4, G4 (Fmaj7)
  },
  {
    bass: 98.00,  // G2
    notes: [196.00, 246.94, 293.66, 392.00, 440.00], // G3, B3, D4, G4, A4 (G6)
  },
];

const MELODIC_ARPEGGIOS = [
  523.25, 587.33, 659.25, 783.99, 880.00, 659.25, 587.33, 523.25,
];

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const synthTimerRef = useRef<number | null>(null);
  const currentChordIdx = useRef<number>(0);
  const currentMelodyIdx = useRef<number>(0);

  // Đảm bảo AudioContext được khởi tạo và unlock ngay lập tức khi người dùng click
  const getOrCreateAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const masterGain = ctx.createGain();
      // Âm lượng chuẩn nghe rõ ràng, ấm áp mà không chói gắt
      masterGain.gain.setValueAtTime(0.5, ctx.currentTime);
      masterGain.connect(ctx.destination);

      audioContextRef.current = ctx;
      masterGainRef.current = masterGain;
    }

    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    return {
      ctx: audioContextRef.current,
      masterGain: masterGainRef.current,
    };
  }, []);

  // Đánh một nốt đàn piano hoàng hôn ngân vang ấm áp
  const playPianoNote = useCallback(
    (freq: number, duration: number, gainLevel: number = 0.18, isBass: boolean = false) => {
      const { ctx, masterGain } = getOrCreateAudioContext();
      if (!ctx || !masterGain) return;

      const now = ctx.currentTime;

      // Oscillator chính
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const noteGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Sóng sine mềm phối hợp sóng triangle để có độ vang piano tự nhiên
      osc1.type = isBass ? 'triangle' : 'sine';
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 1.002, now); // Detune nhẹ tạo độ dày âm thanh

      // Bộ lọc lowpass ấm áp
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(isBass ? 450 : 1200, now);
      filter.frequency.exponentialRampToValueAtTime(isBass ? 200 : 400, now + duration);

      // ADSR Envelope: Attack nhanh êm, Decay ngân vang tự nhiên
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(gainLevel, now + 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
    },
    [getOrCreateAudioContext]
  );

  // Chơi một cụm hợp âm và rải ngón
  const playChordCycle = useCallback(() => {
    const chord = SUNSET_CHORDS[currentChordIdx.current % SUNSET_CHORDS.length];
    currentChordIdx.current += 1;

    // 1. Nốt Bass trầm nền
    playPianoNote(chord.bass, 3.8, 0.22, true);

    // 2. Rải các nốt hợp âm (Arpeggio)
    chord.notes.forEach((freq, idx) => {
      setTimeout(() => {
        playPianoNote(freq, 2.8, 0.14);
      }, idx * 170);
    });

    // 3. Nốt giai điệu phiêu lãng ngẫu hứng
    setTimeout(() => {
      const melodyFreq = MELODIC_ARPEGGIOS[currentMelodyIdx.current % MELODIC_ARPEGGIOS.length];
      currentMelodyIdx.current += 1;
      playPianoNote(melodyFreq, 2.2, 0.16);
    }, 1100);

    setTimeout(() => {
      const melodyFreq2 = MELODIC_ARPEGGIOS[(currentMelodyIdx.current + 2) % MELODIC_ARPEGGIOS.length];
      playPianoNote(melodyFreq2, 2.0, 0.13);
    }, 1900);
  }, [playPianoNote]);

  // Bắt đầu chuỗi phát nhạc
  const startAudio = useCallback(() => {
    const { ctx } = getOrCreateAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    setIsPlaying(true);

    if (synthTimerRef.current) {
      window.clearInterval(synthTimerRef.current);
    }

    // Chơi ngay lập tức hợp âm đầu tiên khi bấm
    playChordCycle();

    // Lặp lại chu kỳ hợp âm mỗi 3.2 giây
    synthTimerRef.current = window.setInterval(() => {
      playChordCycle();
    }, 3200);
  }, [getOrCreateAudioContext, playChordCycle]);

  // Tạm dừng phát nhạc
  const stopAudio = useCallback(() => {
    if (synthTimerRef.current) {
      window.clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  }, [isPlaying, startAudio, stopAudio]);

  const toggleMute = useCallback(() => {
    if (!masterGainRef.current || !audioContextRef.current) return;
    const now = audioContextRef.current.currentTime;

    if (isMuted) {
      masterGainRef.current.gain.setValueAtTime(0.5, now);
      setIsMuted(false);
    } else {
      masterGainRef.current.gain.setValueAtTime(0, now);
      setIsMuted(true);
    }
  }, [isMuted]);

  // Dọn dẹp tài nguyên khi unmount
  useEffect(() => {
    return () => {
      if (synthTimerRef.current) {
        window.clearInterval(synthTimerRef.current);
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return {
    isPlaying,
    audioMode: 'synth' as const,
    isMuted,
    togglePlay,
    toggleMute,
    startAudio,
    stopAudio,
  };
}
