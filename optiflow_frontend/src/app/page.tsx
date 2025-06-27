import Link from "next/link"
import { ArrowRight, BarChart, Package, AlertTriangle, Bot } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">OptiFlow</h1>
            </div>
            <Link 
              href="/dashboard"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>Accéder au Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Assistant IA pour la
            <span className="text-primary"> Gestion de Stock</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transformez vos données Odoo en recommandations prédictives et actions proactives 
            avec l&apos;intelligence artificielle.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Prédictions IA</h3>
              <p className="text-sm text-muted-foreground">
                Prévisions fiables basées sur 12 mois d&apos;historique
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Alertes Intelligentes</h3>
              <p className="text-sm text-muted-foreground">
                Notifications proactives pour éviter les ruptures
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Package className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Optimisation Stock</h3>
              <p className="text-sm text-muted-foreground">
                Recommandations quantités et prix optimaux
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Chat IA</h3>
              <p className="text-sm text-muted-foreground">
                Analyses instantanées via assistant bilingue
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Données de Démonstration Réelles
            </h3>
            <p className="text-muted-foreground mb-6">
              Cette instance contient <strong>9 produits actifs</strong> avec <strong>927 ventes historiques</strong> 
              et des prédictions ML générées en temps réel.
            </p>
            <Link 
              href="/dashboard"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg"
            >
              <BarChart className="h-5 w-5" />
              <span>Explorer le Dashboard</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            OptiFlow - Assistant IA pour la gestion de stock • Démonstration avec données réelles
          </p>
        </div>
      </footer>
    </div>
  )
}
