CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    saleprice DECIMAL(10,2),
    category VARCHAR(100),
    images TEXT[],
    colors TEXT[],
    sizes TEXT[],
    sobre TEXT,
    instock BOOLEAN DEFAULT true,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE info_loja (
  id SERIAL PRIMARY KEY,
  nome TEXT,
  email TEXT,
  whatsapp TEXT,
  horario TEXT,
  descricao TEXT,
  instagram TEXT,
  facebook TEXT
);
