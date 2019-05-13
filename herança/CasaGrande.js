const Casa = require('./Casa');
class CasaGrande extends Casa {
    constructor(corCasaGrande, qtdQuartos) {
        super(corCasaGrande, qtdQuartos);
    }

    getCor() {
        console.log(`COR: ${this.cor}`);
    }

    abrirJanelaCasaGrande(tipoCasa) {
        console.log(`${this.abrirJanela()} ${tipoCasa}`);
    }
}

const casaGrande = new CasaGrande('PRETO', 2);
const casaPequena = new CasaGrande('AZUL', 4);
casaGrande.getInformacao();
casaGrande.abrirJanelaCasaGrande('Casa Grande');
casaPequena.abrirJanelaCasaGrande('Casa Pequena');