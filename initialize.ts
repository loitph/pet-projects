export class Initialize {
  url = 'sampledomain.com';
  flag = false;

  retrieveLoginUrl(): string {
    if (this.flag) {
      return this.url + '/login';
    }

    return this.url;
  }

  toggleFlag(): void {
    this.flag = !this.flag;
  }
}