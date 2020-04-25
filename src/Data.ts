class Data {
  private static _instance: Data;
  public itemInfo = {
    basic: [
      {
        id: "EqualWidth",
        jsfiddle: "813czpq7/12"
      },
      {
        id: "T1",
        jsfiddle: "813czpq7/12"
      },
      {
        id: "T2",
        jsfiddle: "813czpq7/12"
      },
      {
        id: "T3",
        jsfiddle: "813czpq7/12"
      }
    ],
    contents: ["Contents01"],
    card: ["Card01"]
  };

  private constructor() {
    //...
  }

  public pathInfo(): {
    arr: string[];
    lastId: string;
  } {
    const arr = window.location.pathname.split("/");
    const lastId: string = arr[arr.length - 1];
    return {
      lastId,
      arr: arr
    };
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}

export default Data.Instance;
