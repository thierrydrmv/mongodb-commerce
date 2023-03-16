db.produtos.countDocuments({ nome: { $in: [/^M/i, /^C/i] } });
