# Plan de Développement Frontend OptiFlow

## 🎯 Objectif
Créer un frontend Next.js 19 moderne avec architecture Option A (Backend FastAPI + Frontend séparé) pour démontrer toutes les fonctionnalités OptiFlow avec des données réelles.

## 📁 Structure des Dossiers
```
/mnt/c/Users/adham/Memoire_2025/optiflow/
├── optiflow_backend/          # Existant - Backend Python/FastAPI + ML
│   ├── scripts/ml/            # Modèles Prophet existants
│   ├── models/                # Modèles entraînés (.pkl)
│   └── ...
└── optiflow_frontend/         # À créer - Frontend Next.js 19
    ├── src/
    │   ├── app/               # App Router Next.js 19
    │   ├── components/        # Composants UI
    │   ├── lib/              # Client API + utils
    │   └── types/            # Types TypeScript
    ├── package.json
    └── ...
```

## 📊 Données Disponibles (Supabase)
- **9 produits actifs** avec données stock réelles
- **927 enregistrements** d'historique ventes 
- **825 niveaux de stock** avec données temporelles
- **90 prédictions** générées par les modèles IA
- **Tables** : products, sales_history, stock_levels, forecasts, alerts, etl_sync_log

---

## 🏗️ Plan de Développement - Suivi des Phases

### Phase 1: Structure et Configuration Frontend
**Objectif :** Créer la base Next.js 19 avec shadcn/ui et structure de dossiers

#### Actions à réaliser :
- [x] Créer `/optiflow_frontend` avec Next.js 19 + App Router
- [x] Installer dépendances : shadcn/ui, Tailwind, Recharts, Zustand
- [x] Configurer shadcn/ui avec thème OptiFlow personnalisé
- [x] Créer structure de dossiers selon documentation CLAUDE.md
- [x] Page d'accueil basique avec layout

#### Tests à effectuer après Phase 1 :
```bash
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_frontend
npm run dev
# → Vérifier que http://localhost:3000 affiche la page d'accueil
# → Vérifier que Tailwind CSS fonctionne
# → Vérifier que shadcn/ui est bien configuré
npm run build
# → Vérifier que le build Next.js réussit
```

#### ✅ Validation Phase 1 :
- [x] Tests passés
- [x] Validation utilisateur

---

### Phase 2: Backend API FastAPI (dans optiflow_backend)
**Objectif :** Créer l'API FastAPI qui consomme les données Supabase et modules ML

#### Actions à réaliser :
- [ ] Créer API FastAPI dans `/optiflow_backend/api/`
- [ ] Endpoints essentiels : `/api/v1/dashboard/overview`, `/api/v1/products`
- [ ] Réutiliser modules ML existants dans `scripts/ml/`
- [ ] Connexion Supabase via variables d'environnement existantes
- [ ] Documentation API automatique

#### Tests à effectuer après Phase 2 :
```bash
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_backend
python -m uvicorn api.main:app --reload --port 8000
# → Vérifier que http://localhost:8000/docs affiche Swagger UI
# → Tester GET /api/v1/products (doit retourner les 9 produits)
# → Tester GET /api/v1/dashboard/overview (doit retourner KPIs)
curl http://localhost:8000/api/v1/products
# → Vérifier format JSON des produits
```

#### ✅ Validation Phase 2 :
- [ ] Tests passés
- [ ] Validation utilisateur

---

### Phase 3: Composants UI Core (optiflow_frontend)
**Objectif :** Créer les composants de base réutilisables

#### Actions à réaliser :
- [ ] Layout principal avec sidebar navigation
- [ ] Composants shadcn/ui personnalisés (KPICard, StockStatusBadge, ProductTable)
- [ ] Graphiques Recharts (ForecastChart, SalesHistoryChart)
- [ ] Client API centralisé

#### Tests à effectuer après Phase 3 :
```bash
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_frontend
npm run dev
# → Vérifier navigation sidebar fonctionnelle
# → Vérifier affichage composants avec données de test
# → Vérifier responsive design sur mobile/desktop
npm run storybook  # si configuré
# → Vérifier composants en isolation
```

#### ✅ Validation Phase 3 :
- [ ] Tests passés
- [ ] Validation utilisateur

---

### Phase 4: Pages Principales
**Objectif :** Créer toutes les pages de l'application

#### Actions à réaliser :
- [ ] Dashboard (`/dashboard`) avec KPIs et graphiques
- [ ] Détail Produit (`/dashboard/products/[id]`) complet
- [ ] Centre d'Alertes (`/dashboard/alerts`)
- [ ] Liste Produits (`/dashboard/products`)
- [ ] Paramètres (`/dashboard/settings`)

#### Tests à effectuer après Phase 4 :
```bash
# Backend et Frontend en parallèle
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_backend && python -m uvicorn api.main:app --reload --port 8000 &
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_frontend && npm run dev &

# Tests navigation :
# → http://localhost:3000/dashboard (KPIs + graphiques)
# → http://localhost:3000/dashboard/products (liste produits)
# → http://localhost:3000/dashboard/products/1 (détail produit)
# → http://localhost:3000/dashboard/alerts (centre alertes)
# → http://localhost:3000/dashboard/settings (paramètres)

# Vérifier données réelles dans chaque page
```

#### ✅ Validation Phase 4 :
- [ ] Tests passés
- [ ] Validation utilisateur

---

### Phase 5: Intégration Backend-Frontend
**Objectif :** Connecter complètement le frontend au backend

#### Actions à réaliser :
- [ ] Communication frontend ↔ backend
- [ ] Hooks personnalisés (useProducts, useAlerts, useDashboard)
- [ ] Gestion d'état Zustand
- [ ] Gestion erreurs et loading states

#### Tests à effectuer après Phase 5 :
```bash
# Tests intégration complète :
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_backend && python -m uvicorn api.main:app --reload --port 8000 &
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_frontend && npm run dev

# Tests fonctionnels :
# → Actualiser données dashboard fonctionne
# → Navigation entre produits fluide
# → États de chargement visibles
# → Gestion erreurs API (couper backend temporairement)
# → Données persistantes entre pages (Zustand)
```

#### ✅ Validation Phase 5 :
- [ ] Tests passés
- [ ] Validation utilisateur

---

### Phase 6: Intégration Données Réelles
**Objectif :** Utiliser les vrais modèles ML et données Supabase

#### Actions à réaliser :
- [ ] Utiliser modules ML existants `scripts/ml/predict.py`
- [ ] API endpoints consommant classe `OptiFlowForecast`
- [ ] Calculs KPIs en temps réel depuis Supabase
- [ ] Formatage données pour affichage

#### Tests à effectuer après Phase 6 :
```bash
# Tests avec données Supabase réelles :
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_backend

# Générer nouvelles prédictions
python scripts/ml/predict.py

# Lancer API + Frontend
python -m uvicorn api.main:app --reload --port 8000 &
cd ../optiflow_frontend && npm run dev

# Vérifications :
# → KPIs calculés depuis vraies données (927 ventes, 9 produits)
# → Prédictions ML affichées dans graphiques
# → Alertes générées automatiquement
# → Cohérence données entre pages
```

#### ✅ Validation Phase 6 :
- [ ] Tests passés
- [ ] Validation utilisateur

---

### Phase 7: Polish et Optimisations
**Objectif :** Finaliser pour démonstrations qualitatives

#### Actions à réaliser :
- [ ] Responsive design mobile-first
- [ ] Lazy loading composants lourds
- [ ] SEO et métadonnées
- [ ] Tests composants critiques

#### Tests à effectuer après Phase 7 :
```bash
cd /mnt/c/Users/adham/Memoire_2025/optiflow/optiflow_frontend

# Tests performance
npm run build
npm start
# → Vérifier temps de chargement < 3s
# → Tester sur mobile/tablet/desktop

# Tests qualité
npm run lint
npm run test  # si configuré
# → Vérifier aucun warning/erreur

# Test final démonstration
# → Scénario complet : Dashboard → Produit critique → Génération alerte → Résolution
```

#### ✅ Validation Phase 7 :
- [ ] Tests passés
- [ ] Validation utilisateur

---

## 🎯 Résultat Final Attendu
Frontend professionnel dans `optiflow_frontend/` showcasing :
- **Dashboard** exécutif avec KPIs visuels
- **Analyses prédictives** avec graphiques interactifs  
- **Gestion alertes** proactive
- **Détails produits** avec recommandations IA
- **UX/UI moderne** pour démonstrations clients

Le frontend sera prêt pour démonstrations qualitatives montrant la valeur ajoutée d'OptiFlow avec des données métier réelles.

---

## 📝 Notes de Développement
- ✅ = Phase complétée et validée
- 🔄 = Phase en cours
- ⏸️ = Phase en attente

**Dernière mise à jour :** [Date à mettre à jour à chaque phase]