- **alert:** serve para mostrar uma mensagem na tela com uma caixa flutuante.
- **prompt:** mostra uma caixa flutuante com uma entrada de texto na onde o usuário pode inserir informações.
- **console.log:** permite colocar mensagens de texto dentro do console do navegador. É importante lembrar que, quando o projeto ficar disponível para todas as pessoas, o que chamamos no contexto de software de ambiente de produção, os comandos `console.log` devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança.
- **comentários:** para colocar um comentário em um arquivo JS é preciso inserir duas barras (//) no início do texto

### Exemplos
- **alert:**
```
alert("Welcome to secret number game!");
```

- **prompt:**
```
let chooseNumber = prompt("Choose a number between 1 and 100");
```

- **console.log:**
```
console.log("Você acertou o número secreto");
```

- **comentário:**
```
// exemplo de comentário
```

### Lista de atividades - 01
- [x] Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
- [x] Declare uma variável chamada `nome` e atribua a ela o valor "Lua".
- [x] Crie uma variável chamada `idade` e atribua a ela o valor 25.
- [x] Defina uma variável `numeroDeVendas` e atribua a ela o valor 50.
- [x] Defina uma variável `saldoDisponivel` e atribua a ela o valor 1000.
- [x] Exiba um alerta com o texto "Erro! Preencha todos os campos"
- [x] Declare uma variável chamada `mensagemDeErro` e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável `mensagemDeErro`.
- [x] Use um prompt para perguntar o nome do usuário e armazená-lo na variável `nome`.
- [x] Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável `idade`.
- [x] Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

### Lista de atividades - 02
- [x] Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
- [x] Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
- [x] Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar".
- [x] Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
- [x] Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.