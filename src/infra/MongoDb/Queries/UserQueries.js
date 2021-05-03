const { UserModel } = require('../models/User')
module.exports = {
  async create (user) {
    const createdUser = await UserModel(user).save()
    if (!createdUser) {
      return { success: false }
    }
    return { success: true, user: createdUser }
  },
  async getById (id) {
    const user = await UserModel.findById(id)
    if (!user) {
      return { success: false }
    }
    return { success: true, foundUser: user }
  },
  async getAll () {
    const users = await UserModel.find({})
    if (!users) {
      return { success: false }
    }
    return { success: true, foundUsers: users }
  },
  async delete (id) {
    const deletedUser = await UserModel.findByIdAndDelete(id)
    if (!deletedUser) {
      return { success: false }
    }
    return { success: true, user: deletedUser }
  },
  async update (id, user) {
    const { name, email, age, password, cpf, phoneNumber } = user
    const updatedUser = await UserModel.findByIdAndUpdate(id, {
      name: name,
      password: password,
      email: email,
      age: age,
      cpf: cpf,
      phoneNumber: phoneNumber
    })
    if (!updatedUser) {
      return { success: false }
    }
    return { success: true, user: updatedUser }
  },
  async getEmail (email) {
    const userEmail = await UserModel.findOne({ email: email })
    if (!userEmail) {
      return { success: false }
    }
    return { success: true, user: userEmail }
  },
  async getCpf (cpf) {
    const userCpf = await UserModel.findOne({ cpf: cpf })
    if (!userCpf) {
      return { success: false }
    }
    return { success: true, cpf: userCpf }
  }
}
