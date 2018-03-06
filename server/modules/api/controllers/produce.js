import Produce from 'models/produce'

export function getTemplates(req, res, next) {
  const templates = [{
    name: 'Củ Quả',
    tags: [{
      name: 'Khoai Lang'
    }, {
      name: 'Ngô'
    }],
    desc: 'Củ quả tươi ngon nhất'
  }, {
    name: 'Rau Lá',
    tags: [{
      name: 'Rau Muống'
    }, {
      name: 'Rau Ngót'
    }],
    desc: 'Rau lá tươi ngon nhất'
  }, {
    name: 'Vịt',
    tags: [{
      name: 'Vịt Bầu'
    }, {
      name: 'Vịt Cỏ'
    }],
    desc: 'Vịt bầu nổi tiếng Việt Nam'
  }]

  res.json(templates)
}

export function getTags(req, res, next) {
  const tags = [{
    name: 'Khoai Lang'
  }, {
    name: 'Ngô'
  }, {
    name: 'Rau Muống'
  }, {
    name: 'Rau Ngót'
  }, {
    name: 'Vịt Bầu'
  }, {
    name: 'Vịt Cỏ'
  }]

  res.json(tags)
}

export function create(req, res, next) {
  let { template, tag, user } = req.body

  const produce = new Produce({
    template,
    tag,
    user
  })

  produce.save(err => {
    if (err) throw err

    res.json({
      success: true,
      data: produce
    })
  })
}