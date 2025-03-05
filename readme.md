# AUTODEV

## Description
AUTODEV est un workflow n8n conçu pour automatiser le processus de développement et de déploiement de projets web. Il utilise des modèles d'IA pour générer et modifier du code en fonction des instructions reçues via une interface de chat, puis déploie ces changements vers GitHub et un serveur FTP.

## Table des matières
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Architecture](#architecture)
- [Workflow](#workflow)
- [Dépendances](#dépendances)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Gestion des erreurs](#gestion-des-erreurs)
- [Limitations actuelles](#limitations-actuelles)
- [Développement futur](#développement-futur)

## Prérequis
- n8n installé et configuré
- Compte GitHub avec accès API
- Serveur FTP
- Modèle Llama3 accessible via Ollama

## Installation
1. Importez le workflow JSON dans votre instance n8n
2. Configurez les informations d'authentification pour GitHub et FTP
3. Assurez-vous que le service Ollama est accessible et que le modèle Llama3 est disponible
4. Activez le workflow

## Architecture
AUTODEV est divisé en plusieurs sections fonctionnelles:
- **Chat trigger** - Point d'entrée qui reçoit les demandes des utilisateurs
- **Initialisation** - Configuration des paramètres de base (dépôt GitHub, chemins locaux, etc.)
- **Structure + actions** - Analyse de la structure existante et détermination des actions nécessaires
- **DEV** - Génération et modification du code par les agents d'IA
- **GITHUB** - Gestion des opérations sur le dépôt GitHub
- **DEPLOY** - Déploiement des fichiers générés via FTP

## Workflow
1. **Réception de la demande**
   - L'utilisateur envoie une description du projet ou une demande spécifique via l'interface de chat
   - Le système extrait la demande et la combine avec la description générale du projet

2. **Analyse et planification**
   - Un agent IA (AI Agent3) analyse la demande et la structure de fichiers existante
   - L'agent détermine quels fichiers doivent être créés, modifiés ou supprimés
   - Une liste structurée de fichiers à traiter est générée

3. **Génération/Modification de code**
   - Pour chaque fichier identifié:
     - Si c'est un nouveau fichier: AI Agent4 génère le code complet
     - Si c'est une mise à jour: AI Agent récupère le contenu existant et le modifie selon les besoins
     - Si c'est une suppression: le fichier est marqué pour suppression

4. **Validation et extraction**
   - Le code généré est extrait des réponses des agents IA
   - Les blocs de code sont extraits et préparés pour le déploiement

5. **Opérations GitHub**
   - Les fichiers sont créés, mis à jour ou supprimés dans le dépôt GitHub
   - Chaque opération est accompagnée d'un message de commit descriptif

6. **Déploiement FTP**
   - Les fichiers modifiés sont déployés sur le serveur FTP
   - Le système vérifie si le déploiement a réussi

7. **Reset (optionnel)**
   - Si l'utilisateur envoie "reset", tous les fichiers du projet sont supprimés

## Dépendances
- **n8n** (v0.214.0 ou supérieure)
- **Nodes n8n requis**:
  - n8n-nodes-base.stickyNote
  - n8n-nodes-base.git
  - n8n-nodes-base.github
  - n8n-nodes-base.set
  - n8n-nodes-base.code
  - n8n-nodes-base.if
  - n8n-nodes-base.splitOut
  - n8n-nodes-base.ftp
  - @n8n/n8n-nodes-langchain.chatTrigger
  - @n8n/n8n-nodes-langchain.agent
  - @n8n/n8n-nodes-langchain.lmChatOllama
  - @n8n/n8n-nodes-langchain.memoryBufferWindow
- **Services externes**:
  - GitHub API
  - Serveur FTP
  - Ollama avec modèle Llama3

## Configuration
1. **Variables de projet**:
   - `user`: Nom d'utilisateur GitHub
   - `repo`: Nom du dépôt GitHub
   - `localPath`: Chemin local où le dépôt est cloné
   - `remoteBasePath`: Chemin de base sur le serveur FTP

2. **Description du projet**:
   - `contrainte`: Description générale du projet
   - `demande`: Demande spécifique reçue via le chat
   - `nom`: Nom du projet/dossier

3. **Authentification**:
   - Configurer les informations d'identification GitHub dans les Credentials n8n
   - Configurer les informations d'identification FTP dans les Credentials n8n
   - Configurer l'accès à Ollama dans les Credentials n8n

## Utilisation

### Démarrer un nouveau projet
1. Définissez le nom du projet dans le nœud "DESCRIPTION PROJET + DEMANDE"
2. Définissez la contrainte générale (description du projet)
3. Envoyez votre demande spécifique via l'interface de chat

### Modifier un projet existant
1. Envoyez une description détaillée des modifications souhaitées via l'interface de chat
2. Le système identifiera les fichiers à modifier et effectuera les changements nécessaires

### Réinitialiser un projet
1. Envoyez simplement "reset" via l'interface de chat
2. Tous les fichiers du projet seront supprimés

## Gestion des erreurs
Le workflow contient des mécanismes de base pour gérer certaines erreurs:
- Continuation en cas d'échec d'API GitHub
- Passage à la création de fichier si la mise à jour échoue
- Continuation en cas d'échec de suppression de fichier

## Limitations actuelles
- Gestion des erreurs limitée
- Pas de tests automatiques
- Journalisation minimale
- Interface utilisateur limitée pour les retours
- Pas de mécanisme de rollback automatique
- Validation limitée des entrées utilisateur

## Développement futur
- Amélioration de la gestion des erreurs
- Ajout de tests automatiques
- Système de journalisation complet
- Amélioration de la sécurité
- Optimisation du flux
- Interface utilisateur améliorée
- Versionnement et rollback
- Parallélisation pour de meilleures performances
