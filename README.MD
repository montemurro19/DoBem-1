POST http://localhost:8080/api/registrar

{"nome":"Julio","telefone":"11 947100862","dtNascimento":"16012004","email":"rm93285@fiap.com.br","senha":"teste"}

POST http://localhost:8080/api/login/usuario/documento/{id}

{"idEstrangeiro":"00000000000","cpf":"00000000000","rg":"00000000000"}

POST http://localhost:8080/api/login/usuario/endereco/{id}

{"cep":"teste","logradouro":"teste","bairro":"teste","cidade":"teste","estado":"teste","numero":"teste","complemento":"teste"}

POST http://localhost:8080/api/login

{"email":"rm93285@fiap.com.br","senha":"teste"}

POST http://localhost:8080/api/empresa

{"razaoSocial":"teste","cnpj":"teste","telefone":"teste","email":"teste","senha":"teste"}

POST http://localhost:8080/api/empresa/endereco/{id}
--
{"cep":"teste","logradouro":"teste","bairro":"teste","cidade":"teste","estado":"teste","numero":"teste","complemento":"teste"}

POST http://localhost:8080/api/login/usuario/endereco/{id}

{"nome":"teste","regiaoAtuacao":"Alagoas","privacidade":"privado","descricao":"teste"}

POST http://localhost:8080/api/ong"

{"nome":"teste","regiaoAtuacao":"Alagoas","descricao":"teste"}
