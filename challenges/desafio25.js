db.produtos.updateMany({ "valoresNutricionais.2.percentual": { $gte: 40 } }, {
  $push: {
    tags: {
      $each: ["muito sódio"],
    },
  },
});

db.produtos.find({}, { nome: 1, _id: 0, tags: 1 });
