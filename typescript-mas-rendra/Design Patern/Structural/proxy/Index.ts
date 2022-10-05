/**
 * masalah yang timbul adalah ketika koneksi internet tidak stabil data tersimpan di proxy
 * jika sudah stabil akan mengambil data lagi ke API
 */

interface ICovid {
  getData(): Promise<{
    confirmed: number;
    recovered: number;
    deaths: number;
  }>;
}

class Covid implements ICovid {
  country: string;

  constructor(country: string) {
    this.country = country;
  }

  async getData(): Promise<{
    confirmed: number;
    recovered: number;
    deaths: number;
  }> {
    const response: any = await fetch(
      `https://covid19.mathdro.id/api/countries/${this.country}`
    );
    const data: any = await response.json();

    return {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
    };
  }
}

const getCovid2 = async () => {
  const covid = new Covid("id");
  console.log(await covid.getData());
};

getCovid2();
