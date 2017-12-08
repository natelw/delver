class Auth {

  static setToken(token){
    return localStorage.setItem('token',token);
  }

  static getToken(){
    return localStorage.getItem('token');
  }

  static isAuthenticated(){
    return !!this.getToken();
  }

  static removeToken() {
    return localStorage.removeItem('token');
  }
  static getPayLoad() {
    const token = this.getToken();
    if(!token) return null;
    return JSON.parse(atob(token.split('.')[1]));
  }


}

export default Auth;
