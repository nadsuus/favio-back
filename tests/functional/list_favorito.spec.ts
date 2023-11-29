import { test } from '@japa/runner'

test.group('List favoritos', () => {
  // Write your test here
  test('exivir favoritos'), async ({cliente }) => {
const resposta = await cliente.get('/favoritos')

resposta.assertStatus(200)
resposta.assertBodyContains([])
  }
})
