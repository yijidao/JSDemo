export default class DataSource {

    static Listeners = new Set();
    static Data1 = new Set();
    static Data2 = new Set();
    static Flag = false;

    static addListener(listener) {
        // console.log(listener);
        this.Listeners.add(listener);
    };

    static removeListener(listener) {
        // console.log(listener);
        this.Listeners.delete(listener);
    };

    static getData1() {
        
        return DataSource.Data1;
    }
    static getData2() { return DataSource.Data2; }

    static _init = false;

    static Init() {
        
        if (DataSource._init) return;
        setInterval(() => {
            if (DataSource.Flag) {
                DataSource.Data1.add(`A${DataSource.Data1.size}`);
            }
            else {
                DataSource.Data2.add(`B${DataSource.Data2.size}`);
            }
            DataSource.Flag = !DataSource.Flag;
            DataSource.Listeners.forEach(x => x());
            // console.log(DataSource.Data1);
        }, 2000);
        DataSource._init = true;
    }

}



