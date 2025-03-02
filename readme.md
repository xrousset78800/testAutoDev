Prompt descriptif pour l'application "Lecteur Vidéo Avancé"
L'application est un lecteur vidéo web avancé écrit en JavaScript moderne (ES6+). Elle permet la lecture de différents formats de flux médias (MP4, HLS, MPEG-TS) avec une gestion robuste des erreurs, des tentatives de reconnexion et de la qualité vidéo.
Architecture principale
L'application suit une architecture modulaire avec des services, des composants UI, et des utilitaires clairement séparés. Elle s'articule autour d'un design pattern singleton pour ses principaux services et composants.
Fonctionnalités clés

Support multi-format (MP4, HLS, MPEG-TS)
Sélection dynamique de qualité vidéo
Gestion automatique des proxys pour contourner les problèmes CORS
Panel de débogage avec informations en temps réel
Affichage des statuts et des erreurs
Fonctionnalité de fallback vers VLC pour les flux problématiques
Mode faible latence pour les flux en direct

Composants principaux

VideoPlayer: Classe principale coordonnant tous les composants
StatusDisplay: Affiche les messages d'état et les instructions alternatives
QualitySelector: Interface de sélection de la qualité vidéo
DebugPanel: Panneau de débogage affichant les informations techniques
MediaLoader: Charge les différents types de médias
HLSService: Gère les flux HLS via la bibliothèque HLS.js
ProxyService: Gère les proxys pour contourner les limitations CORS

Services techniques

Logger: Service unifié de journalisation
UrlHelper: Utilitaires pour la manipulation d'URLs

Flux d'exécution typique

L'utilisateur sélectionne un flux dans le menu déroulant
Le système détecte le type de média (MP4, HLS, MPEG-TS)
Le flux est chargé via le service approprié
En cas d'erreur CORS, le système tente via un proxy local ou CORS
Les qualités disponibles sont détectées et affichées
L'interface affiche les informations de lecture en temps réel
Un panel de debug montre les métriques techniques (résolution, débit, latence)

Gestion des erreurs
Le système dispose d'une gestion robuste des erreurs avec des tentatives de reconnexion, des fallbacks via proxy, et des instructions alternatives (comme l'utilisation de VLC) si la lecture dans le navigateur est impossible.
Points techniques notables

Utilisation de HLS.js pour les flux HLS et MPEG-TS
Configuration optimisée pour différents fournisseurs de flux (Akamai, etc.)
Support de différentes stratégies de proxy (local ou CORS)
Mode développeur avec journalisation détaillée

Créez une interface utilisateur moderne qui présente ces fonctionnalités de manière intuitive tout en conservant l'architecture technique robuste sous-jacente.
