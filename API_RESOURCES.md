# 🛠️ REST API Resources for Development Practice

## 🔥 **Top Free APIs for Testing**

### 👥 **User APIs**

#### 1. **JSONPlaceholder** (Most Popular)

```bash
Base URL: https://jsonplaceholder.typicode.com

# Users CRUD
GET    /users           # Get all users
GET    /users/1         # Get user by ID
POST   /users           # Create user
PUT    /users/1         # Update user
DELETE /users/1         # Delete user

# Sample User Data
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031",
  "website": "hildegard.org",
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough",
    "zipcode": "92998-3874"
  },
  "company": {
    "name": "Romaguera-Crona",
    "bs": "harness real-time e-markets"
  }
}
```

#### 2. **ReqRes** (Great for Auth Testing)

```bash
Base URL: https://reqres.in/api

# Users
GET    /users                    # Get users (paginated)
GET    /users/2                  # Get single user
POST   /users                    # Create user
PUT    /users/2                  # Update user
DELETE /users/2                  # Delete user

# Authentication
POST   /register                 # Register user
POST   /login                    # Login user

# Sample Response
{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  }
}
```

#### 3. **Random User Generator**

```bash
Base URL: https://randomuser.me/api/

# Generate random users
GET /?results=10              # Get 10 random users
GET /?gender=female           # Filter by gender
GET /?nat=us                  # Filter by nationality

# Rich user data with photos
{
  "results": [{
    "gender": "female",
    "name": {
      "title": "Ms",
      "first": "Jennie",
      "last": "Nichols"
    },
    "email": "jennie.nichols@example.com",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/4.jpg"
    }
  }]
}
```

### 🛒 **Product/E-commerce APIs**

#### 1. **Fake Store API** (Perfect for E-commerce)

```bash
Base URL: https://fakestoreapi.com

# Products CRUD
GET    /products                 # Get all products
GET    /products/1               # Get single product
GET    /products/categories      # Get categories
GET    /products/category/electronics # Products by category
POST   /products                 # Add product
PUT    /products/1               # Update product
DELETE /products/1               # Delete product

# Sample Product
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}

# Shopping Cart
GET    /carts                    # Get all carts
GET    /carts/1                  # Get single cart
POST   /carts                    # Add new cart
PUT    /carts/1                  # Update cart
DELETE /carts/1                  # Delete cart
```

#### 2. **DummyJSON** (Rich Product Data)

```bash
Base URL: https://dummyjson.com

# Products with advanced features
GET    /products                 # Get all products
GET    /products/1               # Get single product
GET    /products/search?q=phone  # Search products
GET    /products/categories      # Get categories
GET    /products/category/smartphones # Filter by category

# Users with detailed info
GET    /users                    # Get all users
GET    /users/1                  # Get single user
POST   /auth/login               # Login user

# Sample Product (Very detailed)
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  "images": [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg"
  ]
}
```

#### 3. **Platzi Fake Store API**

```bash
Base URL: https://api.escuelajs.co/api/v1

# Products with images
GET    /products                 # Get all products
GET    /products/1               # Get single product
POST   /products                 # Create product
PUT    /products/1               # Update product
DELETE /products/1               # Delete product

# Categories
GET    /categories               # Get categories
GET    /categories/1/products    # Products by category

# Users & Auth
GET    /users                    # Get users
POST   /auth/login               # Login
```

## 🌟 **Advanced APIs for Complex Projects**

### 📱 **Social Media Style**

```bash
# JSONPlaceholder Extended
GET    /posts                    # Blog posts
GET    /posts/1/comments         # Comments on post
GET    /albums                   # Photo albums
GET    /photos                   # Photos with thumbnails
GET    /todos                    # Todo lists
```

### 🏪 **Complete E-commerce System**

```bash
# Fake Store API Extended
GET    /products/categories      # ["electronics","jewelery","men's clothing","women's clothing"]
GET    /carts                    # Shopping carts
GET    /carts/user/1             # User's carts
```

## 🛠️ **How to Use in Your React App**

### Example API Service Setup:

```typescript
// src/services/apis/fakestore.ts
const BASE_URL = 'https://fakestoreapi.com'

export const productAPI = {
  getAll: () => fetch(`${BASE_URL}/products`).then(res => res.json()),
  getById: (id: number) => fetch(`${BASE_URL}/products/${id}`).then(res => res.json()),
  getCategories: () => fetch(`${BASE_URL}/products/categories`).then(res => res.json()),
  getByCategory: (category: string) =>
    fetch(`${BASE_URL}/products/category/${category}`).then(res => res.json()),
}

export const userAPI = {
  getAll: () => fetch(`${BASE_URL}/users`).then(res => res.json()),
  getById: (id: number) => fetch(`${BASE_URL}/users/${id}`).then(res => res.json()),
}
```

### Quick Test in Browser:

```javascript
// Test any API instantly
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => console.log(data))
```

## 📊 **Best APIs by Use Case**

| Use Case                | Best API        | Why                                   |
| ----------------------- | --------------- | ------------------------------------- |
| **Learning CRUD**       | JSONPlaceholder | Simple, reliable, well-documented     |
| **E-commerce Projects** | Fake Store API  | Real product data with images         |
| **User Management**     | ReqRes          | Auth support, realistic responses     |
| **Rich Product Data**   | DummyJSON       | Detailed products, search, categories |
| **Random Testing Data** | Random User     | Realistic user photos and data        |

## 🚀 **Pro Tips**

### ✅ **No API Key Required**

- All these APIs are **completely free**
- No registration needed
- No rate limits for reasonable use

### ✅ **CORS Enabled**

- Can call directly from frontend
- Perfect for React/Vue/Angular apps

### ✅ **Multiple Data Formats**

- JSON responses (standard)
- Some support XML
- Realistic data structures

### ✅ **Perfect for Learning**

- Practice CRUD operations
- Test error handling
- Learn API integration
- Build portfolio projects

## 🔧 **Ready-to-Use Examples**

### Simple Product List Component:

```typescript
const [products, setProducts] = useState([])

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])
```

### User Authentication Flow:

```typescript
const login = async (email: string, password: string) => {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  return response.json()
}
```

**Start với Fake Store API - perfect cho e-commerce projects! 🛒**
