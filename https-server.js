const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// IP y puerto deseados
const HOST = '127.0.0.1';
const PORT = 5858;

// Detectar automáticamente la carpeta dist (Angular 17+ incluido)
function findDistPath() {
  const possiblePaths = [
    path.join(__dirname, 'dist', 'doit-console-management-app', 'browser'),
    path.join(__dirname, 'dist', 'doit_console_management_app', 'browser'),
    path.join(__dirname, 'dist', 'doit-console-management-app'),
    path.join(__dirname, 'dist', 'doit_console_management_app'),
    path.join(__dirname, 'dist', path.basename(__dirname), 'browser'),
    path.join(__dirname, 'dist', path.basename(__dirname)),
    path.join(__dirname, 'dist'),
    path.join(__dirname, 'build')
  ];

  console.log('🔍 Buscando index.html en ubicaciones posibles...');

  for (const distPath of possiblePaths) {
    const indexPath = path.join(distPath, 'index.html');
    console.log(`   Verificando: ${indexPath}`);
    if (fs.existsSync(indexPath)) {
      console.log(`✅ Encontrado en: ${distPath}`);
      return distPath;
    }
  }

  console.error('❌ No se encontró index.html en ninguna ubicación esperada');
  process.exit(1);
}

const distPath = findDistPath();
const indexPath = path.join(distPath, 'index.html');

// Logging simple
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Servir archivos estáticos
app.use(express.static(distPath, {
  fallthrough: true,
  index: false
}));

// Servir Angular SPA en rutas sin extensión
app.use((req, res, next) => {
  if (path.extname(req.url)) {
    return next(); // Peticiones a archivos reales
  }
  res.sendFile(indexPath, err => {
    if (err) {
      console.error('Error sirviendo index.html:', err);
      res.status(404).send('Página no encontrada');
    }
  });
});

// 404 final
app.use((req, res) => {
  console.log(`❌ No encontrado: ${req.url}`);
  res.status(404).send('Archivo no encontrado');
});

// Iniciar servidor HTTP en IP fija
app.listen(PORT, HOST, () => {
  console.log(`🚀 Servidor Angular disponible en: http://${HOST}:${PORT}`);
});
