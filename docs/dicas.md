# Dicas

## Listar uma branch
```
git branch
```

## Deletar uma branch Localmente

```
git branch -d <branch>
```

## Deletar uma branch remotamente

```
git push origin --delete <branch>
```

## Criar uma branch e subir ela e depois voltar pra main
```
git checkout -b <branch>
git push -u origin <branch>
git checkout main

# Caso tenha feito alterações
git merge <branch>
git push
```

## Configuração do lint-staged no package.json
```
"lint-staged": {
    "src/**/*": [
      "yarn run lint --fix",
      "yarn run test --findRelatedTests --bail"
    ]
  },

```
