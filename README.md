# dt46calc
Code javascript pour obtenir la surface de voile minimum autorisée par la directive technique 46 de la fédération française de parachutisme.

## Fonctionnement
Le calcul se base sur le tableau disponible dans la version PDF de la directive technique. Voir les tests unitaires pour les détails.

## Utilisation
Il suffit d'importer dans votre page web le fichier dt46calc.js, puis d'appeler la fonction ``dt46calc(nakedWeight, jumps)``.
 * nakedWeight : Poids nu en kg.
 * jumps : Nombre de sauts.
 
La fonction renvoie un objet javascript avec les attributs suivant :
 * weight : Poids retenu pour le calcul.
 * jumps : Nombre de sauts retenu pour le calcul.
 * minSize : Taille de voile minimum autorisée par la DT46.
 * minSize11 : Taille minimum avec l'aménagement de 11%.
 * minSize21 : Taille minimum avec l'aménagement transitoire de 21%.
 
Si le calcul n'est pas possible, la fonction renvoie un objet avec l'attribut ``error``. Trois valeurs sont possibles :
 * invalidWeight : Le poids n'est pas valide.
 * invalidJumps : Le nombre de sauts n'est pas valide.
 * 2000Jumps : Le nombre de sauts est supérieur à 2000.

## Exemple
Le fichier index.html donne un exemple d'utilisation. Il est visible à cette adresse : http://thomas.walraet.net/dt46calc/

## Licence
Le code est disponible sous licence MIT.
