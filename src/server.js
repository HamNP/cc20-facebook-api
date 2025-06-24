import dotenv from 'dotenv'
import app from './app.js'
import prisma from './config/prisma.config.js'

dotenv.config()
// console.log(process.env.PORT)

console.log(app)

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>console.log('Server on :',PORT))

// prisma.user.count().then(rs => console.log(rs))
// prisma.user.count().then(console.log)

prisma.$queryRaw`Select * from user`.then(console.log())

// *** เพิ่ม code ไม่ใช่ copy ทับ ***
import shutdown from './utils/shutdown.util.js'

// Listen for termination signals
process.on('SIGINT', () => {
  prisma.$disconnect().then(()=>{
    console.log('\nprisma shutdown')
    process.exit(0)
  })
});   // Ctrl+C
process.on('SIGTERM', () => shutdown('SIGTERM')); // kill command or Docker stop
// Catch unhandled errors
process.on("uncaughtException", ()=>  shutdown('uncaughtException'))
process.on("unhandledRejection", ()=> shutdown('unhandledRejection'))