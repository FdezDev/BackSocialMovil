import { generateToken } from '../utils/jwt';
import { comparePasswords } from '../utils/password';
import { AuthRepository } from '../domain/authRepository';

type AuthResponse = { 
    status: 'success' | 'error', 
    token?: string, 
    message?: string 
};

export class AuthUseCase {
    constructor(private authRepository: AuthRepository) {}

    async run(email: string, password: string): Promise<AuthResponse> {
        const user = await this.authRepository.verifyUser(email, password);
        if (user) {
            const token = generateToken({ email: user.email });
            return {
                status: 'success',
                token
            };
        } else {
            return {
                status: 'error',
                message: 'Credenciales inválidas'
            };
        }
    }
}