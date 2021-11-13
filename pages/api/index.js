// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        totalvacinados: 7.243,
        drivethru: [
            {
                ativo: 1,
                unidade: 'Parque de Exposições',
                localizacao:
                    'Av.+Luís+Viana+Filho,+1590+-+Itapuã,+Salvador+-+BA,+41620-000/@-12.9226479,-38.3633543,17z/data=!3m1!4b1!4m5!3m4!1s0x7161707d25734b7:0xb4b0c9995f169c2a!8m2!3d-12.9226479!4d-38.3611656',
                endereco:
                    'Av. Luís Viana Filho, 1590 - Itapuã, Salvador - BA, 41730-101',
                atualizacao: '14:37:30',
                dose: ['2ª DOSE', '3ª DOSE'],
                estadofila: 1,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'Unijorge Paralela',
                localizacao:
                    'Av.+Luís+Viana+Filho,+6775+-+São+Marcos,+Salvador+-+BA,+41680-400/@-12.9367153,-38.4130566,17z/data=!3m1!4b1!4m5!3m4!1s0x71610af616230db:0x56b6beca864dac2!8m2!3d-12.9367153!4d-38.4108679',
                endereco:
                    'Av. Luís Viana Filho, 6775 - São Marcos, Salvador - BA, 41680-40',
                atualizacao: '13:50:30',
                dose: ['2ª DOSE'],
                estadofila: 1,
                descricao:
                    'SEGUNDA DOSE OXFORD PARA PESSOAS COM DATA DE REFORÇO NO CARTÃO DE VACINA ATÉ O DIA 11 DE DEZEMBRO.',
            },
            {
                ativo: 1,
                unidade: 'Shopping Bela Vista',
                localizacao:
                    'Alameda+Euvaldo+Luz,+92+-+Horto+Bela+Vista,+Salvador+-+BA,+41098-020/@-12.970469,-38.4763387,17z/data=!3m1!4b1!4m5!3m4!1s0x7161b2809e4a837:0x5207efcb68f998e!8m2!3d-12.970469!4d-38.47415',
                endereco:
                    'Alameda Euvaldo Luz, 92 - Horto Bela Vista, Salvador - BA, 41098-020',
                atualizacao: '14:37:30',
                dose: ['1ª DOSE', '2ª DOSE', '3ª DOSE'],
                estadofila: 2,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'Arena Fonte Nova',
                localizacao:
                    'Ladeira+da+Fonte+das+Pedras+-+Nazaré,+Salvador+-+BA,+40301-110/@-12.97723,-38.5061058,17z/data=!3m1!4b1!4m5!3m4!1s0x71604c256b1285b:0xef35335a4c66132f!8m2!3d-12.97723!4d-38.5039171',
                endereco:
                    'Ladeira da Fonte das Pedras, s/n - Nazaré, Salvador - BA, 40050-565',
                atualizacao: '14:37:30',
                dose: ['1ª DOSE', '2ª DOSE', '3ª DOSE'],
                estadofila: 4,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: '5º Centro de Saúde Clementino Fraga',
                localizacao:
                    '5º+Centro+de+Saúde+Clementino+Fraga/@-12.9911458,-38.5133759,17z/data=!3m1!4b1!4m5!3m4!1s0x716049730dfec17:0x2c27a736af04186b!8m2!3d-12.9913609!4d-38.5112963',
                endereco:
                    'Av. Centenário, s/n - Garcia, Salvador - BA, 46100-000',
                atualizacao: '14:37:30',
                dose: ['1ª DOSE', '2ª DOSE', '3ª DOSE'],
                estadofila: 4,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS DE 12 A 17 ANOS COM E SEM COMORBIDADES; GESTANTES E PUÉRPERAS; SEGUNDA DOSE PFIZER PARA PESSOAS COM DATA DE REFORÇO NO CARTÃO DE VACINA ATÉ O DIA 02 DE DEZEMBRO. TERCEIRA DOSE - IDOSOS COM 60 ANOS OU MAIS E PROFISSIONAIS DE SAÚDE QUE RECEBERAM A SEGUNDA DOSE ATÉ O DIA 08 DE JUNHO; PACIENTES IMUNOSSUPRIMIDOS QUE RECEBERAM A SEGUNDA DOSE ATÉ O DIA 05 DE OUTUBRO.',
            },
        ],
        postosfixo: [
            {
                ativo: 1,
                unidade: '5º Centro de Saúde Clementino Fraga',
                localizacao:
                    '5º+Centro+de+Saúde+Clementino+Fraga/@-12.9911458,-38.5133759,17z/data=!3m1!4b1!4m5!3m4!1s0x716049730dfec17:0x2c27a736af04186b!8m2!3d-12.9913609!4d-38.5112963',
                endereco:
                    'Av. Centenário, s/n - Garcia, Salvador - BA, 46100-000',
                atualizacao: '14:37:30',
                dose: ['2ª DOSE', '3ª DOSE'],
                estadofila: 1,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'USF Vale do Matatu',
                localizacao:
                    'USF+Vale+Do+Matatu/@-12.9796604,-38.4847842,17z/data=!4m5!3m4!1s0x7161b32ee9fd149:0x690cd5769884fad4!8m2!3d-12.979588!4d-38.4832588',
                endereco:
                    'R. Édson Saldanha, 843 - Luís Anselmo, Salvador - BA, 40250-770',
                atualizacao: '14:37:30',
                dose: ['2ª DOSE'],
                estadofila: 2,
                descricao:
                    'SEGUNDA DOSE OXFORD PARA PESSOAS COM DATA DE REFORÇO NO CARTÃO DE VACINA ATÉ O DIA 02 DE DEZEMBRO.',
            },
            {
                ativo: 1,
                unidade: 'USF Itapuã',
                localizacao:
                    'USF+ITAPUÃ/@-12.9323843,-38.372634,14.13z/data=!4m8!1m2!3m1!2s-12.94598,-38.3706864,17z!3m4!1s0x716170db163d87d:0xb0e4279cca53e0db!8m2!3d-12.9460446!4d-38.3690707',
                endereco: 'R. da Ilha, 195-323 - Itapuã, Salvador - BA, 41610',
                atualizacao: '14:37:30',
                dose: ['2ª DOSE'],
                estadofila: 3,
                descricao:
                    'SEGUNDA DOSE OXFORD PARA PESSOAS COM DATA DE REFORÇO NO CARTÃO DE VACINA ATÉ O DIA 11 DE DEZEMBRO.',
            },
            {
                ativo: 1,
                unidade: 'USF San Martim III',
                localizacao:
                    'UBS%2FUSF+San+Martin+III/@-12.9484601,-38.4811069,17.58z/data=!4m5!3m4!1s0x7161b45a57c1c41:0x7db5a2311e15355!8m2!3d-12.9497449!4d-38.4788604',
                endereco:
                    'Av. Gen. San Martin, sn - Casa - San Martin, Salvador - BA, 40355-000',
                atualizacao: '14:37:30',
                dose: ['1ª DOSE'],
                estadofila: 4,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'USF Prof. Eduardo Mamede',
                localizacao:
                    'USF+-+Professor+Eduardo+B.+Mamede/@-12.9167638,-38.3701838,17z/data=!3m1!4b1!4m5!3m4!1s0x716170369c9163b:0x394962466248f7d3!8m2!3d-12.9167671!4d-38.3679867',
                endereco:
                    'Setor e Caminho 16 Mussurunga, s/n - Mussurunga I, Salvador - BA, 41490-286',
                atualizacao: '14:40:30',
                dose: ['1ª DOSE'],
                estadofila: 5,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'USF Nova Brasília',
                localizacao:
                    'USF+Nova+Brasília/@-12.9187025,-38.409383,17z/data=!4m5!3m4!1s0x71610cede9ba43f:0xc8d1c417f28ff1c8!8m2!3d-12.91865!4d-38.4084142',
                endereco:
                    'Av. Aliomar Baleeiro - Nova Brasília, Salvador - BA, 41301-110',
                atualizacao: '14:40:30',
                dose: ['1ª DOSE'],
                estadofila: 5,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
        ],
    });
}
