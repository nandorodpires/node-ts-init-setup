import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    created_at: string

    @Column()
    updated_at: string
}

export default User
