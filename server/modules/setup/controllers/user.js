import User from 'models/user'

export function initRootUser(req, res, next) {
  const user = new User({
    username: 'hoangnv',
    password: '123',
    admin: true,
    email: 'hoangnv@gmail.com',
    address: 'Tuyen Quang'
  })

  user.save(err => {
    if (err) throw err

    res.json({ success: true })
  })
}
