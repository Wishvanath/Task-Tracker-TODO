PGDMP     /    /    
            x            testdemo    10.5    12.0     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �
           1262    29353    testdemo    DATABASE     �   CREATE DATABASE testdemo WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_India.1252' LC_CTYPE = 'English_India.1252';
    DROP DATABASE testdemo;
                postgres    false            �            1259    79693 	   task_info    TABLE     �   CREATE TABLE public.task_info (
    task_id integer NOT NULL,
    task_name character varying(255),
    task_details character varying(1000),
    task_status character varying(50),
    created_date date,
    updated_date date
);
    DROP TABLE public.task_info;
       public            postgres    false            �            1259    79691    task_info_task_id_seq    SEQUENCE     �   CREATE SEQUENCE public.task_info_task_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.task_info_task_id_seq;
       public          postgres    false    198            �
           0    0    task_info_task_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.task_info_task_id_seq OWNED BY public.task_info.task_id;
          public          postgres    false    197            �            1259    29354    test    TABLE     T   CREATE TABLE public.test (
    test_id integer,
    test_descp character varying
);
    DROP TABLE public.test;
       public            postgres    false            t
           2604    79696    task_info task_id    DEFAULT     v   ALTER TABLE ONLY public.task_info ALTER COLUMN task_id SET DEFAULT nextval('public.task_info_task_id_seq'::regclass);
 @   ALTER TABLE public.task_info ALTER COLUMN task_id DROP DEFAULT;
       public          postgres    false    198    197    198            �
          0    79693 	   task_info 
   TABLE DATA           n   COPY public.task_info (task_id, task_name, task_details, task_status, created_date, updated_date) FROM stdin;
    public          postgres    false    198   !       �
          0    29354    test 
   TABLE DATA           3   COPY public.test (test_id, test_descp) FROM stdin;
    public          postgres    false    196   �       �
           0    0    task_info_task_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.task_info_task_id_seq', 12, true);
          public          postgres    false    197            v
           2606    79701    task_info task_info_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.task_info
    ADD CONSTRAINT task_info_pkey PRIMARY KEY (task_id);
 B   ALTER TABLE ONLY public.task_info DROP CONSTRAINT task_info_pkey;
       public            postgres    false    198            �
   x   x�34���,JQ(I,�Fb*���$f�s��($��䤖��pZ����s��qr���d@t#�	h72k7�L����,��MU�K-�hM.JM)�i��52�54"��=... �b:�      �
   "   x�3���2�,�,�(K�K,��2�r�b���� ���     