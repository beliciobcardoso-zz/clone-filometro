// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({
        totalvacinados: 7.243,
        drivethru: [
            {
                ativo: 1,
                unidade: 'Uninassau',
                endereco:
                    'Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275',
                atualizacao: '14:37:30',
                dose: ['2ª DOSE', '3ª DOSE'],
                estadofila: 1,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 0,
                unidade: 'Centro de Convenções',
                endereco:
                    'Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275',
                atualizacao: '14:37:30',
                dose: ['1ª DOSE', '2ª DOSE', '3ª DOSE'],
                estadofila: 2,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'USF San Martin III',
                endereco:
                    'Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275',
                atualizacao: '14:37:30',
                dose: ['1ª DOSE', '2ª DOSE', '3ª DOSE'],
                estadofila: 4,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 0,
                unidade: 'USF Estrada das Barreiras',
                endereco:
                    'Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275',
                atualizacao: '14:37:30',
                dose: ['1ª DOSE', '2ª DOSE', '3ª DOSE'],
                estadofila: 4,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS DE 12 A 17 ANOS COM E SEM COMORBIDADES; GESTANTES E PUÉRPERAS; SEGUNDA DOSE PFIZER PARA PESSOAS COM DATA DE REFORÇO NO CARTÃO DE VACINA ATÉ O DIA 02 DE DEZEMBRO. TERCEIRA DOSE - IDOSOS COM 60 ANOS OU MAIS E PROFISSIONAIS DE SAÚDE QUE RECEBERAM A SEGUNDA DOSE ATÉ O DIA 08 DE JUNHO; PACIENTES IMUNOSSUPRIMIDOS QUE RECEBERAM A SEGUNDA DOSE ATÉ O DIA 05 DE OUTUBRO.',
            },
        ],
        postosfixo: [
            {
                ativo: 0,
                unidade: 'USF Fazenda Grande III',
                endereco:
                    'Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275',
                atualizacao: '14:37:30',
                dose: ['2ª DOSE', '3ª DOSE'],
                estadofila: 2,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'USF Joanes Leste',
                endereco:
                    'Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275',
                atualizacao: '14:37:30',
                dose: ['2ª DOSE'],
                estadofila: 3,
                descricao:
                    'SEGUNDA DOSE OXFORD PARA PESSOAS COM DATA DE REFORÇO NO CARTÃO DE VACINA ATÉ O DIA 02 DE DEZEMBRO.',
            },
            {
                ativo: 0,
                unidade: 'USF Itapuã',
                endereco:
                    'Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275',
                atualizacao: '14:37:30',
                dose: ['3ª DOSE'],
                estadofila: 4,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'USF Estrada das Barreiras',
                endereco:
                    'Rua Dermeval de Souza Gusmão, Local 01-Quadra A- Faz. Grande III, sn, Salvador - BA, 41340-275',
                atualizacao: '14:37:30',
                dose: ['1ª DOSE'],
                estadofila: 5,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
            {
                ativo: 1,
                unidade: 'USF Prof. Eduardo Mamede',
                endereco:
                    'Setor e Caminho 16 Mussurunga, s/n - Mussurunga I, Salvador - BA, 41490-286',
                atualizacao: '14:40:30',
                dose: ['1ª DOSE'],
                estadofila: 2,
                descricao:
                    'PRIMEIRA DOSE - PESSOAS COM 18 ANOS OU MAIS; SEGUNDA DOSE CORONAVAC PARA PESSOAS COM DATA DE REFORÇO NO CATÃO DE VACINA ATÉ O DIA 07 DE NOVEMBRO',
            },
        ],
    });
}
