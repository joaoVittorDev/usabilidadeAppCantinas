
            function swalSimples (tipo, titulo, texto) { // função Simples de confirmação


                          swal({
                      type: tipo,
                      title: titulo,
                      text: texto
                                   });
       
                                          }


              function swalSemConexao (tipo, titulo, texto) { //Alerta de conexão perdida

                              swal({
                                title: titulo,
                                text: texto,
                                type: tipo,
                              confirmButtonText: 'Recarregar'
                              }).then((result) => {
                                if (result.value) {
                                    location.reload();
                                }
                              });
                                                        }


                  function geraPedido(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



  var online = navigator.onLine; // variavel guarda em seguida veifica a conexão com a web

    if (online) {


                      var mudaBot = 0; //variavel que determina os estados dos campos do perfil do usuario

           $("#editarPerfil").on("click", function () { // habilita/desbilita edição de perfil do usuario
             



                                        if (mudaBot == 0) {
                                                                 // remove a classe disbled dos inputs

                $("#nome").removeAttr("disabled");
                $("#sobrenome").removeAttr("disabled");
                $("#telefone").removeAttr("disabled");
                $("#cpf").removeAttr("disabled");
                $("#email").removeAttr("disabled");

                                                          // muda as caracteristicas visuais e atributos do botao
                $("#editarPerfil").removeClass('blue');
                $("#editarPerfil").addClass('green');
                $("#editarPerfil").text('Salvar');

                mudaBot = 1;
            

              } else if (mudaBot == 1) {
                
                        $("#nome").attr("disabled", "");
                $("#sobrenome").attr("disabled", "");
                $("#telefone").attr("disabled", "");
                $("#cpf").attr("disabled", "");
                $("#email").attr("disabled", "");

                                                          // muda as caracteristicas visuais e atributos do botao
                $("#editarPerfil").removeClass('green');
                $("#editarPerfil").addClass('blue');
                $("#editarPerfil").text('Editar');

                mudaBot = 0 ;

                   }
                                               


           });

               

     var creditos = 0; //creditos do usuario

         var totalCreditos = "R$ " + creditos; //solução para mascara de crédito


            var creditosTela = $("#creditosTela"); // h5 no cabecalho com os creditos do usuario


                 creditosTela.text(totalCreditos); // add os crditos correspondentes do usuario



  $("#addCreditos").on("click", function () { // função que add créditos
                          
                       
                          var numCartao = $("#cartaoUsado").val();


                          var addCred = $("#creditosColocar").val();       
           

                              console.log(numCartao, addCred);

              if (numCartao.length == 16) {


                    if (addCred > 0) {



                var  addCred2 =  parseFloat(addCred);

                       creditos = creditos + addCred2;


                            var totalCreditos = "R$ " + creditos;



                                  var creditosTela = $("#creditosTela");


                                        creditosTela.text(totalCreditos);


                                          $("#creditosColocar").val('');
                                          $("#cartaoUsado").val('');

                                              swalSimples("success", "Créditos Adicionados com Sucesso!!");

                                   } else {



                                          $("#creditosColocar").val('');
                                          $("#cartaoUsado").val('');

                           swalSimples('error', '', 'Preencha um valor válido');

                      
                    }


              } else {  

                                
                                          $("#creditosColocar").val('');
                                          $("#cartaoUsado").val('');


                              swalSimples('error', '', 'Preencha um valor válido');

                
              }


  });

function apenasNumeros(string)

{
    
    var numsStr = string.replace(/[^0-9]/g,''); 

   /* var numsStr = string.replace("R$",""); */
      
    
    return parseInt(numsStr);


}


function formatReal( int )
{
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}
  

  function formatRealconf( int )
{
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ".$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1.$2");

        return parseFloat(tmp);
}


var totalPedido = 0;


            $('.collection')
                .on('click', '.collection-item', function(){
                      var nomeProduto = $(this).find("#produto").text();
                      var precoProduto = $(this).find("#preco").text();

                      Materialize.toast(nomeProduto + ' adicionado', 1000);

                      $("<tr id='linhaCarrinho'>  <input type='hidden' id='valor' value='"+precoProduto+"'> <td>1</td> <td>" +
                      nomeProduto + "</td><td>"+precoProduto  +"</td> " +
                      " <td><a id='itemRemove'><i  class='material-icons waves-effect waves "+
                      "waves-circle'>close</i></a></td></tr>").
                      appendTo('#carrones');

                         var tamTabela = $("table").find("tbody tr").length;

                         if (tamTabela >= 10) {

                            swal({
              title:'oloco meu',
              text: 'vai com calma jovem',
              imageUrl: 'img/faustao.gif',
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Custom image',
              animation: false
            })

                


                        

                         }

             var precoProduto2 = apenasNumeros(precoProduto);

          totalPedido += precoProduto2;


             

    });

    $("table").on('click', '#itemRemove', function () {
      
                            swal({
                  title: 'Tem certeza que gostaria de retirar este item do carrinho?',
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Sim, eu quero :)',
                  cancelButtonText: 'Espere um pouco ...'
                }).then((result) => {

                  if (result.value) {

        

            var preco = $("table").find("#valor").val();



             var precoRemove = apenasNumeros(preco);

              totalPedido -= precoRemove;
        

        
      $(this).parents("#linhaCarrinho").remove();

    swal(
      'Retirado :)'
    )

  }
});

       

       
    });

                 $("#btnFinalizar").on('click', function() {

                         var tamTabela = $("#tabela1").find("tbody tr td").length;

                       

             if (tamTabela == 0) { // Verifica se a tabela está vazia
          

                    swalSimples('error','Ops...', 'Seu carrinho está Vazio!!');



               } else if (tamTabela > 0) {



        var online = navigator.onLine; 

        if (online) {    // verifica se o usuario tem net
        
        
        var totalPedidoFormat = formatRealconf(totalPedido);

        
      if (creditos >= totalPedidoFormat) { // verifica se os creditos do usuarios são suficientes
                            
                           swal({
                      title: 'Finalizar a compra agora?',
                      type: 'question',
                      text: 'Valor total R$ '+formatReal(totalPedido)+'',
                      showCancelButton: true,
                      confirmButtonColor: '#2E7D32',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Sim, por favor :)',
                      cancelButtonText: 'Ainda não ...'
                    }).then((result) => {
                      if (result.value) { 
      
      $("#carrones").find("tr").remove();

               var numeroPedido = geraPedido(100,999);


                   creditos -= totalPedidoFormat; // Subtrai valor do pedido dos creditos

               
                            var totalCreditos = "R$ " + creditos;



                                  var creditosTela = $("#creditosTela");


                                        creditosTela.text(totalCreditos);


                                              var pedido = 'O numero do seu pedido é #' + numeroPedido + "#";

                    $("<tr id='linhaPedidosDetalhes'> <td>#"+numeroPedido+"#</td> <td>R$ " +
                            formatReal(totalPedido)  + "</td><td><button id='exibirPeididos'" +
                                                  "class='btn btn-flat'>Detalhes" +
                                                           "</button></td>").
                                                       appendTo('#pedidosDetalhes');       

      totalPedido = 0;  //zera total pedido

       totalPedidoFormat = 0; //zera total calculo 
      
                           swalSimples('success','Pedido Realizado com sucesso!!', pedido );
    
          }

              });

                    }  else { // final verificação creditos

                          swalSimples('error','Ops...', 'Seus Créditos são insuficentes!');
                      
                    } 
 } else {    // fim verificação da net
     

                       swalSemConexao('error', 'A conexão caiu', 'Tente se reconectar a internet e recarregue a aplicação');  
   
 } 

    }

    });



} else {

       swalSemConexao('error', 'Vocês está sem conexão', 'Tente se reconectar a internet e recarregue a aplicação');  

}
