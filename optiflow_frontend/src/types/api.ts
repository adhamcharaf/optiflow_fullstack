export interface Product {
  id: number
  odoo_id: number
  name: string
  reference?: string
  category?: string
  list_price?: number
  standard_price?: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface StockLevel {
  id: number
  product_id: number
  odoo_product_id: number
  quantity_on_hand: number
  quantity_forecasted?: number
  quantity_incoming?: number
  quantity_outgoing?: number
  location?: string
  recorded_at: string
}

export interface SalesHistory {
  id: number
  product_id: number
  odoo_order_id?: string
  customer_name?: string
  quantity: number
  unit_price?: number
  total_amount?: number
  margin?: number
  order_date: string
  created_at: string
}

export interface Forecast {
  id: number
  product_id: number
  forecast_date: string
  predicted_demand?: number
  confidence_level?: number
  rupture_risk?: number
  recommended_order_qty?: number
  created_at: string
  model_version?: string
}

export interface Alert {
  id: number
  product_id: number
  alert_type: 'rupture_imminente' | 'rupture_prevue' | 'surstock'
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
  message?: string
  recommended_action?: string
  is_resolved: boolean
  created_at: string
  resolved_at?: string
}

export interface DashboardKPIs {
  total_products: number
  products_at_risk: number
  products_out_of_stock: number
  avg_stock_rotation: number
  total_stock_value: number
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}