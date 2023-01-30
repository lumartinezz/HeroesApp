import {render, screen} from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../src/auth/context/AuthContext'
import {PrivateRoute} from '../../src/router/PrivateRoute'



describe('Pruebas en el Private Route', () => { 

    test('debe mostrar el children, si no esta autenticado', () => { 


        Storage.prototype.setItem = jest.fn()
       
        const contextValue = {
            logged:true,
            user:{
                id: 'abc',
                name: 'juan carlos'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>

                
                <PrivateRoute>
                    <h1>Ruta privada</h1>
                </PrivateRoute>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman')


     })
 })