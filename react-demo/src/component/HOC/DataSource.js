class DataSource {
    Listeners = new Set();
    Data1 = new Set();
    Data2 = new Set();

    addListener(listener) {
        console.log(listener);
        this.Listeners.add(listener);
    }
    removeListener(listener) {
        console.log(listener);
        this.Listeners.delete(listener);
    }

    Update() {
        this.Listeners.forEach(x => x())
    }

    Flag = false;

    constructor() {
        setInterval(() => {
            if (this.Flag) {
                this.Data1.add(`A${this.Data1.size}`);
            }
            else {
                this.Data2.add(`B${this.Data2.size}`);
            }
        }, 1000);
    }
}
const dataSource = new DataSource();

export default DataSource;
