class Buch {
    verlag
    bestand
    titel
    seitenanzahl


    constructor(verlag, bestand, titel, seitenzahl) {
        this.verlag = verlag
        this.bestand = bestand
        this.titel = titel
        this.seitenanzahl = seitenzahl
    }

    verfuegbar() {

        if (this.bestand > 0) {
            console.log(this.bestand)
        } else (this.bestand = 0)
        {
            console.log("Bestand ist null")
        }
    }

    verkauft() {
        this.bestand = this.bestand - 1

    }
}
let lager
    function init() {
        let Buch1 = new Buch("klek", 10, "Die Tomate", 234)
        let Buch2 = new Buch("schneider", 2,"Der Helm", 33)
        let Buch3 = new Buch("gmbh", 5, "Wilde Kerle1", 122)
        let Buch4 = new Buch("jaja", 30, "Wilde Kerle2", 200)
        lager.push(Buch1, Buch2, Buch3, Buch4)
    }
init()
console.log(lager)




//TEst