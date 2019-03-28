const  request=require('supertest')
const  chaiExpect = require('chai').expect;  
const ArmServer='http://10.0.0.21:8329'
const netServer='http://10.0.0.21:8080'



describe(' ARM---摄像头服务', function() {
    
    it(' 拍摄 /snap@param {0} stream', function(done) {
        request(ArmServer)
        .get('/snap?stream=0')
        //.set('Accept', 'application/json')
        .expect(200)
        .end( function (err,res){
            if(err) return err
         //   console.log(typeof( res.body),'bode1',res.headers.Connection)
            chaiExpect(res.body).to.exist
            done();
        }) ;   
    
    });

    it('拍摄 /camera@param {1} stream', function(done)  {
        this.timeout(8000)
        const a = 1

        request(ArmServer)
        .get(`/snap?stream={a}`)
        .expect(200)
        .end( function(err,res){
            if (err) return err
       // console.log('body2',res.text,res.buffered)
        chaiExpect(res.body).to.exist
        done()
    
    })



        
    });

    it('曝光参数设置 @param{0} exp', (done) => {
        request(ArmServer)
        .get('/camera?exp=0')
        .expect(200)
        .end((err,res)=>{
          //  console.log('res3',)
            chaiExpect(res.headers.server).to.be.equal('MJPG-Streamer/0.2')
            chaiExpect(JSON.parse(res.text).result).to.be.equal('ok')
            done()

        })
        
    });

    it.skip('曝光参数设置 @param{0} exp', (done) => {
        request(ArmServer)
        .get('/camera?exp=50')
        .expect(200)
        .end((err,res)=>{
          //  console.log('res3',)
            chaiExpect(res.headers.server).to.be.equal('MJPG-Streamer/0.2')
            chaiExpect(JSON.parse(res.text).result).to.be.equal('ok')
            done()

        })
        
    });

    it('曝光参数设置 @param{100} exp', (done) => {
        request(ArmServer)
        .get('/camera?exp=100')
        .expect(200)
        .end((err,res)=>{
          //  console.log('res3',)
            chaiExpect(res.headers.server).to.be.equal('MJPG-Streamer/0.2')
            chaiExpect(JSON.parse(res.text).result).to.be.equal('ok')
            done()

        })
        
    });

    it('曝光参数设置 @param{101} exp', (done) => {
        request(ArmServer)
        .get('/camera?exp=101')
        .expect(200)
        .end((err,res)=>{
          //  console.log('res3',)
            chaiExpect(res.headers.server).to.be.equal('MJPG-Streamer/0.2')
            chaiExpect(JSON.parse(res.text).result).to.be.equal('ok')
            done()

        })
        
    });
    it('曝光参数设置 @param{-1} exp', (done) => {
        request(ArmServer)
        .get('/camera?exp=-1')
        .expect(200)
        .end((err,res)=>{
          //  console.log('res3',)
            chaiExpect(res.headers.server).to.be.equal('MJPG-Streamer/0.2')
            chaiExpect(JSON.parse(res.text).result).to.be.equal('ok')
            done()

        })
        
    });
    
})









// describe('测试index.js',()=> {
//     before(()=>console.info("在本区块的所有测试用例之前执行"))
  
//     after(()=>console.info("在本区块的所有测试用例之后执行"))
  
//     beforeEach(()=>console.info("在本区块的每个测试用例之前执行"))
  
//     afterEach(()=>console.info("在本区块的每个测试用例之后执行"))
  
//     describe('测试addNum函数', ()=> {
//       it('两数相加结果为两个数字的和', ()=> {
//         assert.equal(addNum(1,2),3)
//       })
//     })
//   })
