# Introduction

Projet développé à l'aide d'un cours vidéo : [Comment Créer un CV en Ligne en React.js (Hooks version 2021) - Tutoriel React pour Débutant](https://www.youtube.com/watch?v=V6VdW5J2juE). L'auteur utilise un bout de code trouvé sur ce lien : [Easy Dark Mode Switch with React and localStorage](https://aleksandarpopovic.com/Easy-Dark-Mode-Switch-with-React-and-localStorage/).

## Intérêts de ce projet

Ce projet a pour but de me familiariser à Réact. De plus, il utilise un système de mode sombre et lumière, de plus en plus utiliser sur les sites. Il a ici l'avantage de garder en mémoire le mode choisit pour le réutiliser ultérieurement. Et enfin, ce projet me montrera une façon de générer un pdf automatiquement.

Pour résumer, les intérêts seront de :
- Se familiariser à Réact
- Mettre en place un mode sombre
- Générer un pdf

## Problèmes rencontrés 

Le projet s'est bien déroulé dans l'ensemble. Toutefois le bouton pour le darkmode n'était pas complètement opérationnel, tout comme la génération du pdf.

### Mode sombre

Le changement de mode était correctement pris en compte. L'auteur de la vidéo avait choisit d'ajouter un système d'état local qui posait des problèmes après un refresh. L'affichage du bouton n'était pas toujours celui correspondant au mode chargé. De plus, cet ajout n'apportait rien et complexifié le code sans raison.

J'ai donc choisit de le retirer.

### Génération de pdf

Enfin, la génération du pdf a poser plusieurs problèmes. Le premier étant le manque de contrôles sur le pdf final. Le cv généré ne prenait un compte qu'une page en coupant à l'arrache le texte affiché en bas de page.

De plus, le block Preview utilisait pour générer l'affichage du pdf se mettait au premier plan ce qui empêchait la sélection du texte du cv ainsi que tous les liens disponibles tel que le bouton Mode sombre/clair, tel et mailto.

J'ai donc pris la décision de retirer cette partie pour le moment, le temps de trouver comment corriger cela. Pouvoir général automatiquement le pdf est un vrai plus, même si la pré-génération n'est pas un problème en soi.
