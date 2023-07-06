import { Component, OnInit } from '@angular/core';
import { EntryData, bingoData } from '@models/bingoData'

@Component({
  selector: 'app-bingo-grid',
  templateUrl: './bingo-grid.component.html',
  styleUrls: ['./bingo-grid.component.css']
})
export class BingoGridComponent implements OnInit {
  bingoData: EntryData[][] = [];
  randomMiddleEntry: EntryData | undefined;

  ngOnInit() {
    const seed = new Date().getDate();
    const random = this.seedableRandom(seed);
    const filteredData = bingoData.filter(item => item.difficulty === 1);

    this.randomMiddleEntry = this.getRandomEntry(filteredData, random);

    const shuffledData = this.shuffleArray(bingoData, random).filter(item => item.Entry !== this.randomMiddleEntry?.Entry);

    this.bingoData = [
      [shuffledData[0], shuffledData[1], shuffledData[2]],
      [shuffledData[3], this.randomMiddleEntry, shuffledData[4]],
      [shuffledData[5], shuffledData[6], shuffledData[7]]
    ];
  }

  private seedableRandom(seed: number): () => number {
    let x = Math.sin(seed++) * 10000;
    return () => {
      x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
  }

  private getRandomEntry(array: EntryData[], random: () => number): EntryData {
    const randomIndex = Math.floor(random() * array.length);
    return array[randomIndex];
  }

  private shuffleArray(array: EntryData[], random: () => number): EntryData[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
