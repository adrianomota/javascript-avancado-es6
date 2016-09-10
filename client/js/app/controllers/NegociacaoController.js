class NegociacaoController{

    constructor(){

       let $ = document.querySelector.bind(document);
       this._inputData = $('#data');
       this._inputQuantidade = $('#quantidade');
       this._inputValor = $('#valor');
       this._listaNegociacoes = new ListaNegociacoes();
       Object.freeze(this);
    }

    adiciona(event){
        
       event.preventDefault();
 
       this._listaNegociacoes.adiciona(this._criaNegociacao());
       this._limpaFormulario();
    }

    _criaNegociacao(){
        
        return new Negociacao(DateHelper.textoParaData(this._inputData.value),
                              this._inputQuantidade,
                              this._inputValor
                             );
    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0
        this._inputData.focus();
    }
}