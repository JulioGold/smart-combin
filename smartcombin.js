var smartCombin = {
	combine:combine
};

module.exports = smartCombin;

function combine(allElements, groupSize) {

    var combin = Combinacao(allElements, groupSize);
    var listaSaida = [];
    var saida = [];
	while (combin.HasNext())
	{
		saida = combin.Next();
        listaSaida.push(saida);
	}

	return listaSaida;
};

function Combinacao(entrada, r) {
    
	var MAX = ~(1 << entrada.length);
	var N = 1;
    
    return {

        HasNext : function HasNext() {
            if (r != 0) {
                while (((N & MAX) != 0) && (CountBits() != r)) {
                    N += 1;
                }
            }
            return (N & MAX) != 0;
        },
    
        SaidaLength : function SaidaLength() {
            if (r != 0) {
                return r;
            }
            return CountBits();
        },

        Next : function Next() {
            var saida_index, entrada_index, i;
			var saida = [];

            entrada_index = 0;
            saida_index = 0;
            i = 1;

            while ((MAX & i) != 0) {
                if ((N & i) != 0) {
                    saida[saida_index] = entrada[entrada_index];
                    saida_index += 1;
                }
                entrada_index += 1;
                i = i << 1;
            }

            N += 1;

            return saida;
        }
    };
    
    function CountBits() {
        var i;
        var c;
        i = 1;
        c = 0;
        while ((MAX & i) != 0) {
            if ((N & i) != 0) {
                c++;
            }
            i = i << 1;
        }
        return c;
    };

};