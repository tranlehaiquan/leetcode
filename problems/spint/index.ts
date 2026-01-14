function randMax(max: number) {
  return Math.trunc(1e9 * Math.random()) % max;
}

type Reel = {
  symbols: string[];
  position: number | null;
  spin(): void;
  display(): string;
};

const symbols = ['X', 'Y', 'Z', 'W', '$', '*', '<', '@'];

const reel: Reel = {
  position: null,
  symbols,
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

const slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  // < | @ | *
  // @ | X | <
  // X | Y | @
  display() {
    // TODO
    // console.log(this.reels);
    const positions = this.reels.map((i) => i.position);

    for (let y = -1; y <= 1; y++) {
      const result = positions
        .map((position) => {
          const temp = Object.create(reel);
          const newPosition = position + y;

          if (newPosition < 0) {
            temp.position = symbols.length - 1;
          } else if (newPosition === symbols.length) {
            temp.position = 0;
          } else {
            temp.position = position + y;
          }

          return temp.display();
        })
        .join(' | ');
      console.log(result);
    }
  },
};

for (let x = 0; x < 10; x++) {
  slotMachine.spin();
  slotMachine.display();

  console.log('---new---');
}
