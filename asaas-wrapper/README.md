## Asaas Wrapper

essa lib serve como um intermediario entre nossas aplicacoes e o Bass, todos metodos
estao separados por modulos e devem ser instanciados um cliente por modulo

## como usar

```
import {AsaasClient} from '@aion/asaas-wrapper'

const client = new AsaasClient('chave-de-api', sandbox = true)
```

## exemplo

por exemplo, quero fazer uma requicao get, para retornar informacoes de pagamento

```
import {AsaasClient} from '@aion/asaas-wrapper'

const client = new AsaasClient('chave-de-api')

const retrievePaymentScrow  = await client.payment.retrievePaymentBillingInfo('id-payment')

```
