function sendEmpresaPhoto(idEmpresa)
{
	$.ajaxFileUpload
	(
		{
			url:wwwroot+'admin/clubedevantagens/sendempresaphoto',
			secureuri:false,
			fileElementId:'photo_empresa',
			dataType: 'text',
			data:{id:idEmpresa},
				onComplete: function() {
					$.ajaxFileUpload
					(
						{
						url:wwwroot+'admin/clubedevantagens/sendempresaphoto',
						secureuri:false,
						fileElementId:'photo_empresa_2',
						dataType: 'text',
						data:{id:idEmpresa},

						success: function (response, status)
						{
							var functionCloseButton = function() {  window.location.reload(); };
							if(document.getElementById("id_empresa"))
								var type = "Alterar";
							else
								var type = "Adicionar";
							
							if(response=="OK")
								showReturn("SUCCESS",type+" Empresa","Empresa salva com sucesso!",functionCloseButton);
							else
								showReturn("ERROR",type+" Empresa","Empresa salva. "+response,functionCloseButton); //alert(response);
						},
							error: function (s, xml, status, e)
							{
								alert(e);
							}
						}
					)
     		
			success: function (response, status)
			{
				var functionCloseButton = function() {  window.location.reload(); };
				if(document.getElementById("id_empresa"))
					var type = "Alterar";
				else
					var type = "Adicionar";
				
				if(response=="OK")
					showReturn("SUCCESS",type+" Empresa","Empresa salva com sucesso!",functionCloseButton);
				else
					showReturn("ERROR",type+" Empresa","Empresa salva. "+response,functionCloseButton); //alert(response);
			},
			error: function (s, xml, status, e)
			{
				alert(e);
			}
		}
	)

	return false;
}
