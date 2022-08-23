interface NumericConverter {
  convertNumber(number: number): void;
}

class NumberConvertion {
  private strategy: NumericConverter;

  constructor(strategy: NumericConverter) {
    this.strategy = strategy;
  }

  execute(num: number) {
    this.strategy.convertNumber(num);
  }
}

class NumberToCurrency implements NumericConverter {
  convertNumber(number: number): void {
    console.log(
      number.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "IDR",
      })
    );
  }
}

class NumberToDecimalSeparator implements NumericConverter {
  convertNumber(number: number): void {
    console.log(
      number.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
      })
    );
  }
}

class NumberToDate implements NumericConverter {
  convertNumber(number: number): void {
    console.log(new Date(number * 1000).toUTCString());
  }
}

const mataUang = new NumberConvertion(new NumberToCurrency());
mataUang.execute(10000000000); // Rp 10.000.000,00

const decimal = new NumberConvertion(new NumberToDecimalSeparator());
decimal.execute(50000); // 50.000,00
