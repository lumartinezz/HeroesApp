import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { AppRouter } from '../../src/router/AppRouter'

describe('Pruebas en AppRoutes', () => { 
    test('debe mostrar el login si no esta autenticado', () => { 

        const contextValue = {
            logged:false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={{contextValue}}>
                    <AppRouter/>
                </AuthContext.Provider> 
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2)
    })

    test('debe mostrar el componente marvel si esta autenticado', () => { 
        const contextValue={
            logged:true,
            user:{
                id: 'ABC',
                name: 'juan carlos'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={{contextValue}}>
                    <AppRouter/>
                </AuthContext.Provider> 
            </MemoryRouter>
        )

        expect(screen.getAllByAltText('Marvel').length).toBeGreaterThanOrEqual(1)
     })
 })