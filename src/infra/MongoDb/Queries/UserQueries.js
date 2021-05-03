const { UserModal } = require('../models/User')
module.exports = {
  async create (user) {
    const createdUser = await UserModal(user).save()
    if (!createdUser) {
      return { success: false }
    }
    return { success: true, user: createdUser }
  },
  async getById (id) {
    const user = await UserModal.findById(id)
    if (!user) {
      return { success: false }
    }
    return { success: true, foundedUser: user }
  },
  async getAll () {
    const users = await UserModal.find({})
    if (!users) {
      return { success: false }
    }
    return { success: true, foundUsers: users }
  },
  async delete (id) {
    const deletedUser = await UserModal.findByIdAndDelete(id)
    if (!deletedUser) {
      return { success: false }
    }
    return { success: true, user: deletedUser }
  },
  async update (id, user) {
    const { name, email, age, password, cpf, phoneNumber } = user
    console.log(user)
    const updatedUser = await UserModal.findByIdAndUpdate(id, {
      name: name,
      password: password,
      email: email,
      age: age,
      cpf: cpf,
      phone_number: phoneNumber
    })
    if (!updatedUser) {
      return { success: false }
    }
    return { success: true, user: updatedUser }
  },
  async getEmail (email) {
    const userEmail = await UserModal.findOne({ email: email })
    if (!userEmail) {
      return { success: false }
    }
    return { success: true, user: userEmail }
  },
  async getCpf (cpf) {
    const userCpf = await UserModal.findOne({ cpf: cpf })
    if (!userCpf) {
      return { success: false }
    }
    return { success: true, cpf: userCpf }
  }
}
