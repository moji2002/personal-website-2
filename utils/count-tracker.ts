class CountTracker {
  key = "";
  constructor(key: string) {
    this.key = key;
  }

  get count() {
    const totalCount = localStorage.getItem(this.key);
    if (totalCount) return +totalCount;
    return 0;
  }

   increment() {
    localStorage.setItem(this.key, this.count + 1 + "");
  }
}

export default CountTracker
