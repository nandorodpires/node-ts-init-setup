import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column({
        select: false
    })
    password: string

    @Column()
    created_at: string

    @Column()
    updated_at: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(): void {
        this.password = bcrypt.hashSync(this.password, 8)
    }
}

export default User
