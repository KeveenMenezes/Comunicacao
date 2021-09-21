function notificarFiat(email,assunto,mensagem) {
    var email = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('B1').getValue(); //email de destino
    var assunto = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('B3').getValue(); //assunto do email
    var cabe = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('N9').getValue(); //conteudo da mensagem
    var bloco1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('N10').getValue(); //conteudo da mensagem
    var bloco2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('N11').getValue(); //conteudo da mensagem
    var bloco3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('N12').getValue(); //conteudo da mensagem
    var libera = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('B5').getValue(); //verificador se o email deve ser enviado
    var data = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('K2').setValue(new Date()).setNumberFormat("dd/mm/yyyy HH:mm:ss");
    var mensagem =cabe + bloco1 + bloco2 + bloco3;
    var cc = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Fiat AVISOS').getRange('B2').getValue(); //assunto do email
    
    if(libera == "S"){
     
    MailApp.sendEmail({
      to: email,//pega os dados da variável e-mail
      subject: assunto,//pega os dados da variável assunto
      cc: cc,
      htmlBody:'Prezados(as) bom dia!  <br />Segue abaixo a relação das turmas com baixo quórum, na qual o requisito seja turmas com menos de 80% na taxa de matricula,<br /> e pedimos a atenção para a gestão das matrículas de seus respectivos regionais: </tr>' + mensagem,
      name: "Keveen Menezes", //nome do remetente de envio do e-mail
      }
                     
      )
  }
  }
  function notificarJeep(email,assunto,mensagem) {
    var emailJ = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('B1').getValue(); //email de destino
    var assuntoJ = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('B3').getValue(); //assunto do email
    var cabeJ = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('N9').getValue(); //conteudo da mensagem
    var bloco1J = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('N10').getValue(); //conteudo da mensagem
    var bloco2J = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('N11').getValue(); //conteudo da mensagem
    var bloco3J = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('N12').getValue(); //conteudo da mensagem
    var liberaJ = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('B5').getValue(); //verificador se o email deve ser enviado
    var dataJ = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('K2').setValue(new Date()).setNumberFormat("dd/mm/yyyy HH:mm:ss");
    var mensagemJ =cabeJ + bloco1J + bloco2J + bloco3J;
    var ccJ = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jeep AVISOS').getRange('B2').getValue(); //assunto do email
    
    if(liberaJ == "S"){
     
    MailApp.sendEmail({
      to: emailJ,//pega os dados da variável e-mail
      subject: assuntoJ,//pega os dados da variável assunto
      cc: ccJ,
      htmlBody:'Prezados(as) bom dia!  <br />Segue abaixo a relação das turmas com baixo quórum, na qual o requisito seja turmas com menos de 80% na taxa de matricula,<br /> e pedimos a atenção para a gestão das matrículas de seus respectivos regionais: </tr>' + mensagemJ,
      name: "Keveen Menezes", //nome do remetente de envio do e-mail
      }
                     
      )
  }
  }				
                    