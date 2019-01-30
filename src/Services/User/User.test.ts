import * as User from './User';
import faker from 'faker';

faker.locale = "sv";

jest.spyOn(window.localStorage.__proto__, 'setItem');
window.localStorage.__proto__.setItem = jest.fn();

const mockUser = {
  success: {
    email: 'test@testsson.se',
    password: 'test22'
  },
  fail: {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}
describe('User module', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  })

  describe('login method', async () => {
    it('should autenticate a user', async () => {
      expect(await User.login(mockUser.success)).toBeTruthy();
    })

    it('should reject an invalid user', async () => {
      expect(User.login(mockUser.fail)).rejects.toEqual(new Error('invalid email or password'));
    })

    it('should store a payload in localstorage on successfull authentication', async () => {
      await User.login(mockUser.success)
      expect(localStorage.setItem).toHaveBeenCalled();
    })
  })

  describe('isAuthenticated method',() => {
    it('should return false if user is not authenticated', () => {
      expect(User.isAuthenticated()).toBeFalsy()
    })

    it('should return true if user is authenticated', async () => {
      await User.login(mockUser.success);
      expect(User.isAuthenticated()).toBeTruthy()
    })
    
  })
})