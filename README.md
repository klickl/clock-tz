# clock-directive

Directive simple qui permet d'afficher une horloge commme celle au sommet de la page momentjs.com

https://momentjs.com/

### Prérequis

Il faut avoir installé: 

   * momentjs
   * momentjs-timezone
   
Voici un exemple d'utilisation dans le html

Il faut obligatoirement passer le nom de la zone. 
Pour trouver les zones allez voir sur cette page https://momentjs.com/timezone/

```html
<clock zone="America/New_York"></clock>
```

Il aussi possible de changer la couleur du tour de l'horloge et des aiguilles en rajoutant un paramètre color

```html
<clock zone="America/New_York" color="#ff0000"></clock>
```

ou

```html
<clock zone="America/New_York" color="rgb(255, 0, 0)"></clock>
```
