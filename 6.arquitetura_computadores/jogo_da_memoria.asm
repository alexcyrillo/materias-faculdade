.data
palavra: .asciiz "ELEFANTE"
tamanho: .word 8
chutes: .space 26
tentativas: .word 6
acertos: .word 0

.text
.globl main

main:
    li $v0, 4
    la $a0, mensagem_boas_vindas
    syscall

    la $a0, palavra
    lw $a1, tamanho
    jal imprimir_palavra_inicial

loop_jogo:
    li $v0, 4
    la $a0, mensagem_adivinhar
    syscall

    li $v0, 12
    syscall
    move $s0, $v0

    la $a0, palavra
    lw $a1, tamanho
    move $a2, $s0
    jal verificar_chute

    lw $t0, acertos
    lw $t1, tamanho
    beq $t0, $t1, vitoria

    lw $t0, tentativas
    beqz $t0, derrota

    j loop_jogo

vitoria:
    li $v0, 4
    la $a0, mensagem_vitoria
    syscall
    j fim

derrota:
    li $v0, 4
    la $a0, mensagem_derrota
    syscall

fim:
    li $v0, 10
    syscall

verificar_chute:
    move $t0, $zero
    move $t1, $zero

loop_verificar:
    lb $t4, 0($a0)
    beqz $t4, fim_verificar

    beq $t4, $a2, acertou

    addiu $a0, $a0, 1
    addiu $t1, $t1, 1
    j loop_verificar

acertou:
    addiu $a0, $a0, 1
    addiu $a2, $a2, 1
    addiu $t0, $t0, 1
    j loop_verificar

fim_verificar:
    sw $t0, acertos
    lw $t2, tamanho
    sub $t3, $t2, $t1
    sw $t3, tentativas
    jr $ra

imprimir_palavra_inicial:
    move $t0, $zero

loop_imprimir:
    lb $t1, 0($a0)
    beqz $t1, fim_imprimir

    li $v0, 11
    move $a0, $t1
    syscall

    addiu $a0, $a0, 1
    addiu $t0, $t0, 1
    j loop_imprimir

fim_imprimir:
    jr $ra

.data
mensagem_boas_vindas: .asciiz "Bem-vindo ao jogo da forca!"
mensagem_adivinhar: .asciiz "Digite uma letra: "
mensagem_vitoria: .asciiz "Parabéns, você venceu!"
mensagem_derrota: .asciiz "Você perdeu, tente novamente!"